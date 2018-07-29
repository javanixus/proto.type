<template>
<div>
<div class="notif notif--danger">
            <p>whoops ! we tracked a mysterious person, go check it now !</p>
        </div>
        <div class="notif notif--warning">
            <p>we warn to update your security settings, to avoid hacker.</p>
        </div>
        <div class="notif notif--done">
            <p>your command has been done master.</p>
        </div>
        <div class="notif notif--dev">
            <p>Hooray 🎉 !, we just updated version to 2.0 <a href="javascript:void(0)">check what updates now.</a></p>
        </div>
        <div class="notif notif--owner">
            <p>welcome back my owner 🙇‍ . our app is getting optimized.</p>
        </div>
</div>
</template>
<template>
          <div v-if="notifIsShow" class="boardStorage__content--notif">
        <span>
            <span class="iconCircle circle--heart">
              <svg height="16" width="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"></path></svg>
            </span>
        <b>Tips:</b> &nbsp; You can upload more than one item, drop your files on second box.</span>
        <button class="btn--close" @click="notifClose">
                  <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"></path></svg>
          </button>
      </div>
</template>
