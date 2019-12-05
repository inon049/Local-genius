<template>
  <section class="login-form-container">
    <h1>LOGIN</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px">
      <el-form-item prop="email">
        <el-input
          placeholder="Email"
          aria-placeholder="Email"
          @keyup.enter.native="submitForm('ruleForm')"
          type="email"
          v-model="ruleForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="Password"
          aria-placeholder="Password"
          @keyup.enter.native="submitForm('ruleForm')"
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
    <a href="/signup">Not a member? Signup!</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        password: "",
        email: ""
      },
      rules: {
        password: [
          { required: true, message: "Please input password", trigger: "blur" }
        ],
        email: {
          type: "email",
          required: true,
          message: "Please input a valid email address",
          trigger: "submit"
        }
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const user = await this.$store.dispatch({
            type: "login",
            userCred: this.ruleForm
          });
          if (user) this.$router.replace("/");
          // else msg error
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    created() {}
  }
};
</script>