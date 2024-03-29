<template>
    <v-content>
        <carousel/>
            <v-container>
                <v-row class="ml-1">
                    <v-col>
                        <v-btn v-if="user" outlined large @click="redirect('project-new')">
                            <v-icon class="mr-5">mdi-plus-circle-outline</v-icon>
                            Create Project
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-expansion-panels outlined hover>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    Filter
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-text-field
                                            label="Name"
                                            clearable
                                            prepend-icon="search"
                                            v-model="search"
                                            @keyup="searchProjects()"
                                    ></v-text-field>
                                    <v-select
                                            :items="items"
                                            label="Category"
                                            v-model="category"
                                            @change="searchProjects"
                                    ></v-select>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="4" md="4" lg="3"
                           v-for="project of projects"
                           :key="project.id">
                        <project-card-component :project="project"/>
                    </v-col>
                </v-row>
                <div class="text-center">
                    <v-pagination
                            color="#4b830d"
                            v-model="page"
                            :length="numberOfPages"
                            circle
                            in
                    ></v-pagination>
                </div>
            </v-container>
    </v-content>
</template>

<script>
  import Carousel from './CarouselComponent'
  import ProjectCardComponent from './ProjectCardComponent'
  import ProjectService from '../../services/project-service'
  import AuthenticationService from '../../services/authentication-service'
  import ProjectCategories from '../../util/project-categories'

  export default {
    name: 'HomeComponent',
    components: {ProjectCardComponent, Carousel},
    data: () => ({
      projects: {},
      page: 1,
      numberOfPages: 1,
      items: ProjectCategories.categories,
      search: '',
      category:''
    }),
    computed: {
      user: () => AuthenticationService.getUser()
    },
    async mounted () {
      ProjectService.getAllProjects(this.search, this.category)
        .then((result) => {
          this.projects = result.data
          this.numberOfPages = Math.ceil(this.projects.length / 12)
        })
    },
    methods: {
      redirect (path) {
        this.$router.push({path: path})
      },
      searchProjects(){
        ProjectService.getAllProjects(this.search, this.category)
          .then((result) => {
            this.projects = result.data
            this.numberOfPages = Math.ceil(this.projects.length / 12)
          })
      }
    }
  }
</script>
