import ebus from './event-bus';

//提示框消失时间间隔
const defaultDur = 2000; // ms

//提示框
export default {
  show(content, duration, showCloseBtn) {
    ebus.$emit('toast:show', content, duration ? duration : defaultDur, showCloseBtn ? showCloseBtn : false);
  },

  hide() {
    ebus.$emit('toast:hide');
  }
}
