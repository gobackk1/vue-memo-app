import Img from './index.vue';

export default {
  name: 'Img',
  component: Image
}

export const Default = () => ({
  render() {
    return <Img src="/static/image/sample/sample1.jpg" alt="サンプル画像" />
  }
})