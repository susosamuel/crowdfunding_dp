import HomeComponent from './components/Home/HomeComponent'
import RegisterComponent from './components/UserManagement/RegisterComponent'
import ProjectDetailComponent from './components/Project/ProjectDetailComponent'
import AddProjectComponent from './components/Project/AddProjectComponent'

export const routes = [
  {
    path: '',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/home',
    name: 'HomePath',
    component: HomeComponent
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent
  },
  {
    path: '/project/:id',
    name: 'project',
    component: ProjectDetailComponent
  },
  {
    path: '/project-new',
    name: 'project-new',
    component: AddProjectComponent
  }
]

