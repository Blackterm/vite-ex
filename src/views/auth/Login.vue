<template >
  <div
    class="row justify-content-center"
    style="
      background-image: url('https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    "
  >
    <div class="col-6">
      <div class="card border-24 p-4 mt-5 rounded-2 shadow">
        <Form
          data-test="loginForm"
          class="form w-100"
          id="kt_login_signin_form"
          autocomplete="off"
          @submit="onSubmitLogin"
        >
          <div class="row mt-2">
            <div class="col-md-12">
              <Field
                tabindex="1"
                class="form-control form-control-lg form-control-solid"
                type="text"
                name="email"
                maxlength="11"
                v-model="userName"
              />

              <div class="fv-help-block">
                <ErrorMessage name="taxNumber" />
              </div>
            </div>

            <div class="col-md-12 mt-4">
              <Field
                tabindex="1"
                class="form-control form-control-lg form-control-solid"
                type="password"
                name="password"
                autocomplete="off"
                v-model="password"
              />

              <div class="fv-help-block">
                <ErrorMessage name="taxTitle" />
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex mt-4 justify-content-md-end">
            <button type="button" class="btn btn-primary" @click="login">
              Primary
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ErrorMessage, Field, Form } from "vee-validate";

export default {
  name: "login",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const userName = ref("");
    const password = ref("");
    const router = useRouter();

    const login = () => {
      router.push({ name: "home" });
    };
    const onSubmitLogin = () => {};

    return {
      login,
      userName,
      password,
      onSubmitLogin,
    };
  },
};
</script>




