import HomeTemplate from "./index.vue"
import Button from "@/components/atoms/Button"
import { action } from "@storybook/addon-actions"

export default {
  name: "HomeTemplate"
}

export const Default = () => ({
  components: { HomeTemplate, Button },
  methods: {
    onClickButton() {
      action("click")()
    }
  },
  template: `
    <div style="height: 100vh;">
      <HomeTemplate style="height: 100%;">
        <Button slot="googleAuthButton" :onClickButton="onClickButton">google_auth_button</Button>
        <Button slot="trialAuthButton" :onClickButton="onClickButton">trial_auth_button</Button>
      </HomeTemplate>
    </div>
  `
})
