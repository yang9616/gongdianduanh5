const OSS = require('ali-oss').Wrapper;
const config = require('../config/server');
const path = require('path');
const fs = require('fs');

const store = new OSS({
    accessKeyId: config.aliKey,
    accessKeySecret: config.aliSecret,
    bucket: 'zd-static',
    region: 'oss-cn-shenzhen',
    internal: true
});

module.exports = () => {
    ['js', 'img', 'css']
    .forEach(dir => {
        let fullDir = path.join(__dirname, '../wx_static/static', dir);
        
        console.log('processing: ' + fullDir);
        
        let prefix = `static/${dir}/`;
        
        store.list({
            prefix,
            'max-keys': 1000 // TODO 超过1000张图片了有问题啊
        }).then(result => {
            
            let remoteAssets = result.objects.map(obj => obj.name.substring(prefix.length, obj.length));
            let localAssets = fs.readdirSync(fullDir);
            
            let toBeUploaded = localAssets.filter(local => remoteAssets.indexOf(local) === -1);
            
            toBeUploaded.forEach(asset => {
                
                store.put(prefix + asset, path.join(fullDir, asset)).then(ret => {
                    
                    console.log(ret.name + ' uploaded to oss');
                });
            });
        });
    });
}