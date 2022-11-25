import Avator from './index.vue';

export default {
  name: 'Avator',
  components: {Avator}
}

export const Default = () => ({
  components: {Avator},
  template: '<Avator avatorSrc="/static/image/sample/sample_avator.png" />',
  // render() {
  //   return (<Avator avatorSrc="/static/image/sample/sample_avator.png" />)
  // }
})
export const WithSrcError = () => ({
  render() {
    return (<Avator avatorSrc="/static/asdf.png" />)
  }
})