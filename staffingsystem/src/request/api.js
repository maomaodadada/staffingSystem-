import { get, post } from '@/request/http'

export const indexApi = {
  getIndexList: p => get('/data/login.json', p),
  postStuTable: p => post('/data/login.json', p)
}
export const jobListApi = {
  getjobList: p => get('/api/jobList/jobList', p),
  postjobTable: p => post('/api/jobList/jobTable', p)
}
