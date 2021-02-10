<template>
  <div id="app" class="box-border antialiased bg-gray-100 text-secondary ">
    <div
      id="nav"
      class="relative z-50 flex items-center justify-between px-8 shadow h-26 opacity-95 content-evenly"
    >
      <router-link :to="{ name: 'Home' }">
        <img src="../src/assets/logo.png" alt="logo" class="h-28 w-38 " />
      </router-link>
      <div
        class="hidden gap-10 mr-20 text-xl md:hover:text-primary md:order-last md:flex"
      >
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
      <div @click="showMenu = !showMenu">
        <img
          src="../src/assets/menu.svg"
          alt="menu button"
          class="w-8 h-8 cursor-pointer md:hidden "
        />
      </div>

      <!-- this is menu section only show on mobile -->
      <div
        v-if="showMenu"
        class="absolute right-0 flex flex-col items-end w-full gap-5 px-4 pb-5 bg-gray-50 top-28 md:hidden md:block"
      >
        <router-link
          class="flex justify-end w-full px-4 py-2 rounded hover:bg-gray-200"
          :to="{ name: 'Home' }"
          @click="showMenu = false"
          >Home</router-link
        >
        <router-link
          class="flex justify-end w-full px-4 py-2 rounded hover:bg-gray-200"
          :to="{ name: 'About' }"
          @click="showMenu = false"
          >About</router-link
        >
      </div>
    </div>
    <router-view />
    <footer
      id="main-footer"
      class="relative flex flex-col h-auto px-5 py-3 mt-20 text-xs font-light text-center bg-footer text-footerText "
    >
      <div
        class="grid grid-cols-1 p-0 font-light sm:grid-cols-2 md:p-2 md:grid-cols-4 "
      >
        <!--  -->
        <div id="g-1" class="flex flex-col items-center justify-center ">
          <div class="flex flex-col items-end">
            <img src="../src/assets/logo.png" alt="logo" class="w-44 " />
          </div>
        </div>

        <!-- Here looping the breeds from data object below  to generate filtered links links-->

        <div id="g-2" class="flex flex-col items-start mt-5 sm:p-10">
          <h3 class="text-lg font-semibold text-left text-primary">
            Popular Breeds
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li
              v-for="(popBreed, index) in popBreeds"
              :key="index"
              class="py-2 capitalize cursor-pointer hover:text-primary"
            >
              <router-link
                :to="{
                  name: 'PopularBreeds',
                  params: { breed: popBreed.toLowerCase() },
                }"
              >
                {{ popBreed }}
              </router-link>
            </li>
          </ul>
        </div>

        <div id="g-3" class="flex flex-col items-start mt-5 sm:p-10 sm:flex ">
          <h3 class="text-lg font-semibold text-left text-primary">
            Shortcuts
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li
              v-for="(shortCut, index) in shortCuts"
              :key="index"
              class="py-2 capitalize cursor-pointer hover:text-primary"
            >
              <router-link :to="{ name: shortCut }">
                {{ shortCut }}
              </router-link>
            </li>
          </ul>
        </div>
        <div id="g-4" class="flex flex-col items-start mt-5 sm:p-10">
          <h3 class="text-lg font-semibold text-left text-primary">
            Contacts
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li
              v-for="(contact, index) in contacts"
              :key="index"
              class="py-2 cursor-pointer hover:text-primary "
            >
              <i :class="contact.icon"></i>
              <a :href="contact.link" target="_blank">{{ contact.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="float-left w-full mt-3">
        Copyright
        <a href="https://www.gagik.me" target="”_blank”"
          >© Gagik Navasatariyan</a
        >
        {{ date }}
      </div>
    </footer>
  </div>

  <!-- This a back to top button -->
  <button
    class="fixed px-5 bottom-20 right-10 btn btn-primary "
    @click="backToTop"
    v-show="showToTop"
  >
    Back To top
  </button>
</template>
<script>
  //

  // ..

  // ....
  export default {
    data() {
      return {
        showToTop: false,
        showMenu: false,
        shortCuts: ['About', 'Home'],
        popBreeds: ['Corgi', 'Pug', 'Retriever', 'Husky'],
        contacts: {
          email: {
            title: 'gagik.n@gmail.com',
            link: 'mailto: gagik.n@gmail.com',
            icon: 'px-2 fas fa-envelope',
          },
          website: {
            title: '/Gagik.me',
            link: 'https://www.gagik.me',
            icon: 'px-2 fas fa-globe',
          },
          github: {
            title: '/GagikNav',
            link: 'https://github.com/GagikNav/sunanalytics',
            icon: 'px-2 fab fa-github',
          },
          linkedin: {
            title: '/Gagik-n',
            link: 'https://www.linkedin.com/in/gagik-n/',
            icon: 'px-2 fab fa-linkedin',
          },
        },
      };
    },

    computed: {
      date: () => {
        const d = new Date();
        return d.getFullYear();
      },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        window.scrollY > 1200
          ? (this.showToTop = true)
          : (this.showToTop = false);
      },
      backToTop() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      },
    },
  };
</script>
<style lang="scss">
  #app {
  }

  #nav {
    a {
      font-weight: bold;
      color: #3b4754;

      &.router-link-exact-active {
        color: #f9c133;
      }
    }
  }
</style>
