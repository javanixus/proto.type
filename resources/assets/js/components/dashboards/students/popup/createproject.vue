<template>
    <modal name="create-project" classes="nice-modal" transition="scale" :reset="true" width="500px" height="auto" :maxHeight="500" :clickToClose="false">
        <div v-if="datas.dataFlow === 1">
            <div class="createProjectPopup__header">
                <button class="btn--close" @click="close">
                    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"></path></svg>
                </button>
            </div>
            <div class="createProjectPopup__content">
                <div class="createProjectPopup__content__cover">
                    <img src="/images/block.svg" alt="">
                    <p>{{datas.projectTitle}}</p>
                    <div class="createProjectCover--tips">
                        <span>You can add emoticon 👏 beside your project title, make unique as possible regrads 🍻.</span>
                    </div>
                </div>
                <form>
                    <div class="createProjectPopup__content__title">
                        <input name="title" :class="{'input': true, 'input-danger': errors.has('title')}" v-validate="'required'" @focus="$event.target.select()" v-model="datas.projectTitle" type="text" value="Project title" class="input input--primary" placeholder="fill project title">
                    </div>
                    <div class="createProjectPopup__content__desc">
                        <textarea :class="{'input': true, 'input-danger': errors.has('desc')}" v-validate="'required'" @focus="$event.target.select()" v-model="datas.projectDesc" name="desc" id="" rows="8" placeholder="fill the desc">We need to create a few different alternative for a colorfull, fun and vibrant sidebar. So far our best sources of inspirations are in bucket on the team.</textarea>
                    </div>
                </form>
            </div>
            <div class="createProjectPopup__footer">
                <button :disabled="!IsPassed" :class="{'btn-disabled': !IsPassed}"  class="btn btn--primary paddingLeft-m paddingRight-m" @click="validateBeforeSubmit(2)">Next</button>
            </div>
        </div>
        <div v-else-if="datas.dataFlow === 2">
            <div class="createProjectPopup__header">
                <button class="btn--close" @click="close">
                    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"></path></svg>
                </button>
            </div>
            <div class="createProjectPopup__content">
                <div class="createProjectPopup__content__cover">
                    <p>This is about stacking the blocks.</p>
                    <div class="createProjectCover--tips">
                        <span>Some settings can be change anytime 😎 so dont be confused about it 👌.</span>
                    </div>
                </div>
                <form>
                    <div class="createProjectPopup__content__select">
                        <label>
                            <div class="checkbox--circle">
                                <input v-model="datas.dataLinked" type="checkbox" id="checkbox-linked" class="circle">
                                <label for="checkbox-linked"></label>
                            </div>
                            Enable linked project
                        </label>
                        <div class="select-details">
                            When you enable linked project you grant to share your project to who you person linked.
                        </div>
                        <label>
                            <div class="checkbox--circle">
                                <input v-model="datas.dataEncrypt" type="checkbox" id="checkbox" class="circle">
                                <label for="checkbox"></label>
                            </div>
                            Enable encrypt 1.0 🔒
                        </label>
                        <div class="select-details">
                            This is part of our services to secure your privacy from the hacker. We recommend to enable this if you have private project.
                        </div>
                    </div>
                </form>
            </div>
            <div class="createProjectPopup__footer">
                <button class="btn btn--primary btn--grey paddingLeft-m paddingRight-m" @click="swapData(1)">Back</button>
                <button class="btn btn--primary paddingLeft-m paddingRight-m" @click="swapDataValidate(3)">Next</button>
            </div>
        </div>
        <div v-else-if="datas.dataFlow === 3">
            <div class="createProjectPopup__header">
                <button class="btn--close" @click="close">
                    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"></path></svg>
                </button>
            </div>
            <div class="createProjectPopup__content">
                <div class="createProjectPopup__content__cover">
                    <div class="connectBadge">
                        <div class="avatar--heartbeat">
                            <div class="avatar marginMagic avatar--l" style="background-image: url(/images/sample.jpg);"></div>
                        </div>
                        <div style="width: 30px;"></div>
                        <div class="avatar--heartbeat">
                            <div class="avatar avatar--l marginMagic" style="background-image: url(/images/avatar/people1.png);"></div>
                        </div>
                    </div>
                    <p>Now choose person who want you connect.</p>
                    <div class="createProjectCover--tips">
                        <span>This setting will be applied permanently. In the future we acctualy make dis customizable / not longer permanently , so be carefull in taking action.</span>
                    </div>
                </div>
                <form>
                    <div class="createProjectPopup__content__select">
                        <div class="select--item">
                            <p>Mentor select:</p>
                            <select class="select select--primary" name="" id="teacherSelect">
                                <option value="1">Ires sapa lupa saya</option>
                                <option value="2">Melanoke Pramanik</option>
                                <option value="3">Bu Flowchart</option>
                                <option value="4">Javanixus</option>
                            </select>
                        </div>
                        <div class="select--item">
                            <p>Task select:</p>
                            <select class="select select--primary" name="" id="projectSelect">
                                <option value="1">C++ projects</option>
                                <option value="2">Tugas akhir</option>
                                <option value="3">Php design</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="createProjectPopup__footer">
                <button class="btn btn--primary btn--grey paddingLeft-m paddingRight-m" @click="swapData(2)">Back</button>
                <button class="btn btn--primary paddingLeft-m paddingRight-m" @click="swapData(4)">Next</button>
            </div>
        </div>
        <div v-else-if="datas.dataFlow === 4">
            <div class="createProjectPopup__header">
                <button v-if="datas.dataProcess === false" class="btn--close" @click="close">
                    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"></path></svg>
                </button>
            </div>
            <div v-if="datas.dataProcess">
                <div class="createProjectPopup__content">
                    <div class="createProjectPopup__content__cover">
                        <p>Almost done Hooray!</p>
                        <div class="createProjectCover--tips">
                            <span>Wait for a seconds , we are encrypting your project.</span>
                        </div>
                        <div class="shield-pulse" style="padding-bottom: 100px;">
                            <div class="shield-pulse--core">
                                <img src="/images/blackShield.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="createProjectPopup__content">
                    <div class="createProjectPopup__content__cover">
                        <p>{{datas.output}}</p>
                        <div class="createProjectCover--tips">
                            <span>Now you can choose close the dialog popup or redirect to the project have you been created.</span>
                        </div>
                    </div>
                </div>
                <div class="createProjectPopup__footer" style="text-align: center!important; margin-top: 30px!important;">
                    <button class="btn btn--primary paddingLeft-m paddingRight-m" @click="postData(datas)">Go to project</button>
                    <button class="btn btn--primary paddingLeft-m paddingRight-m" @click="getData(datas,'create-project')">Get Decrypted Data</button>
                </div>
            </div>
        </div>
    </modal>
</template>
<style>

</style>
<script>
export default {
    data: () => ({
        datas: {
            projectTitle: '',
            projectDesc: '',
            secretPharse: 'blubme',
            output: '',
            dataFlow: 1,
            dataProcess: false,
            dataLinked: false,
            dataEncrypt: true,
        }
    }),
    computed: {
    IsPassed() {
        return this.datas.projectTitle && this.datas.projectDesc;
        },
    },
    methods: {
        close() {
            this.$modal.hide('create-project')
            this.datas.dataFlow= 1
            this.datas.projectTitle = ''
            this.datas.projectDesc = ''
        },
        swapData(val){this.datas.dataFlow = val},
        swapDataValidate(val){
            this.datas.dataLinked ? this.datas.dataFlow = val : this.datas.dataFlow = 4
        },
        create() {
            console.log('create')
        },
        validateBeforeSubmit(val) {
            this.$validator.validateAll().then((result) => {
            if (result) {
                this.swapData(val)
                return
            }
            alert('Correct them errors!')
    });
    }
    },
}
</script>
