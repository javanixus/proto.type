<template>
  <div id="logstudent">
      <div class="login">
        <div class="login__form">
          <div class="formContent">
            <div class="formContent__inner">
              <div class="formContent__inner__core">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
        <div class="login__cover">
          <div class="coverContent">
            <div class="coverContent__inner">
              <div class="coverContent__inner_core">
                <span><h1 style="color: #fff;">Proto</h1><h1 style="color: #FAC02E;">.type</h1>
                  <p> flexible tools are designed for any project or workflow. Plan ahead, set priorities and track projects from start to finish.</p>
                </span>
              </div>
            </div>
            <div class="coverContent__navbar">
              <ul>
                <li>
                  <router-link to="">Roadmap</router-link>
                  <router-link to="">About</router-link>
                  <router-link to="">Feedback</router-link>
                </li>
              </ul>
            </div>
            <div class="coverContent__icon">
              <img src="/images/Triangle.svg" class="triangle1">
              <img src="/images/Triangle.svg" class="triangle2">
              <img src="/images/Triangle.svg" class="triangle3">
              <img src="/images/Circle.svg" class="circle1">
              <img src="/images/Circle.svg" class="circle2">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>