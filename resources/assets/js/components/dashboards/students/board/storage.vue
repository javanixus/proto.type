<template>
  <div class="boardStorage">
    <div class="boardStorage__sidebar">
      <ul>
        <li>Projects file</li>
        <li>Workflow files</li>
      </ul>
    </div>
    <div class="boardStorage__content">
      <div v-if="notifIsShow" class="boardStorage__content--notif">
        <span><b>Tips:</b> You can upload more than one item, drop your files on second box.</span>
        <button class="btn--close" @click="notifClose">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"></path></svg>
              </button>
      </div>
      <!-- <div class="boardStorage__content--topbar">
              <ul>
                <li>flowchart template</li>
                <li>proposal template</li>
              </ul>
            </div> -->
      <div class="boardStorage__content--core">
        <div id="project-upload" class="projectUpload">
          <label for="project-upload" class="project-upload--label">Project data drops :</label>
          <div class="projectUploadWrap">
            <div class="projectUpload__core">
              <file-pond name="projectUpload" ref="pond"  instantUpload="false" class="storageFile" label-idle="Drop or click upload project here" label-file-waiting-for-size="calculate size" accepted-file-types="application/zip, application/x-rar-compressed"
                server="https://httpbin.org/post" v-bind:files="myFiles" />
            </div>
            <div class="projectUpload__misc">
              <file-pond name="miscUpload" ref="pond" allow-multiple="true" instantUpload="false" class="storageFile" label-idle="Drop or click to upload files here" label-file-waiting-for-size="calculate size" server="https://httpbin.org/post"
                v-bind:files="myFiles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vueFilePond from 'vue-filepond';
  
  // Import FilePond styles
  import 'filepond/dist/filepond.min.css';
  
  // Import image preview plugin styles
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
  
  // Import image preview and file type validation plugins
  import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageExifOrientation);
  export default {
    data: () => ({
      notifIsShow: true,
      myFiles: []
    }),
    methods: {
      notifClose() {
        if (this.notifIsShow === true) {
          return this.notifIsShow = false
        }
      }
    },
    components: {
      FilePond
    }
  }
</script>
