<template>
  <h1>Sign In to an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">SignIn with Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const email = ref('');
const password = ref('');
const errMsg = ref(); // Error Message
const router = useRouter();


const register = () => {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((data) => {
    console.log('Successfully signed in!');
    console.log(auth.currentUser);
    router.push('/feed'); // redirect to the feed
  }).catch((error)=> {
    console.log(error.code);
    switch (error.code) {
      case 'auth/invalid-email':
        errMsg.value = 'No account with that email was found';
        break;

      case 'auth/wrong-password':
        errMsg.value = 'Incorrect password';
        break;

      default:
        errMsg.value = 'Email or password was incorrect';
        break;
    }
    alert(error.message);
  });
};

const signInWithGoogle = () => {
  console.log(1);
}


</script>