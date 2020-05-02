import axios from 'axios'
import vars from '../dev-env-variables'

class ProjectService {

  getAllProjects (search, category) {
    return axios.get(vars.baseURI + '/projects',{
      params: {
        name: search,
        category: category
      }
    })
  }

  async getOneProject (projectId) {
    return axios.get(vars.baseURI + '/projects/' + projectId)
  }

  createNewProject (projectData) {
    console.log(projectData)
    return axios.post(vars.baseURI + '/projects/new', projectData)
  }

  recordContribution (projectId, contributionData) {
    return axios.post(vars.baseURI + '/projects/contribute/' + projectId, contributionData)
  }

  getAllContributions () {
    return axios.get(vars.baseURI + '/projects/contributions')
  }

  getContributionsForProject (projectId) {
    return axios.get(vars.baseURI + '/projects/contributions/' + projectId)
  }

}

export default new ProjectService()
