<template>
  <div>
                  <form>
                    <div class="formBlock">
                      <div class="formBlock__inner marginBottom-s">
                        <label for="userStudent">Username or email</label>
                        <input type="text" id="userStudent" placeholder="pampam or fahmiirsyad10@protonmail.com" class="input input--primary">
                      </div>
                    </div>
                    <div class="formBlock">
                      <div class="formBlock__inner marginBottom-s">
                        <label for="passStudent">Password</label>
                        <input type="password" id="passStudent" placeholder="•••••••••••••••••" class="input input--primary">
                      </div>                    
                    </div>
                    <div class="formButton">
                      <router-link exact to='forgot'>forgot?</router-link>
                      <!-- <a @click.prevent="forgotSwitch">forgot?</a> -->
                      <button class="btn btn--primary" type="submit" @click.prevent="fetchData">LOG IN TO PROTO.TYPE</button>
                    </div>
                  </form>
  </div>
</template>
