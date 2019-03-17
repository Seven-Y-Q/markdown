import fs from 'fs';

const bootstrapMD = fs.readFileSync(__dirname + '/bootstrap.md', 'utf8');
export default {
  current: '',
  isSidebarOpen: false,
  examples: {
    Bootstrap: bootstrapMD,
    React: ''
  }
}
