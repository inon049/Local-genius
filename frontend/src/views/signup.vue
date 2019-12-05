<template>
  <section class="login-form-container">
    <h1>SIGNUP</h1>
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
      <el-form-item prop="passValidator">
        <el-input
          placeholder="Confirm password"
          aria-placeholder="Confirm password"
          @keyup.enter.native="submitForm('ruleForm')"
          type="password"
          v-model="ruleForm.passValidator"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Signup</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
    <a href="/login">Already a member? Login!</a>
  </section>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") callback(new Error("Please input password"));
      else {
        if (this.ruleForm.validatePass !== "") {
          this.$refs.ruleForm.validateField("passValidator");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") callback(new Error("Please input password again"));
      else if (value !== this.ruleForm.password) {
        callback(new Error("The passwords must match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        passValidator: "",
        email: ""
      },
      rules: {
        password: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        passValidator: [
          {
            validator: validatePass2,
            trigger: "blur"
          }
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
          const userCred = {
            password: this.ruleForm.password,
            email: this.ruleForm.email
          };
          await this.$store.dispatch({
            type: "signup",
            userCred
          });
          this.$router.replace("/");
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