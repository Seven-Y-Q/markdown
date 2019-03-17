import fs from 'fs';

const bootstrapMD = fs.readFileSync(__dirname + '/bootstrap.md', 'utf8');
const reactMD = fs.readFileSync(__dirname + '/react.md', 'utf8');
const vueMD = fs.readFileSync(__dirname + '/vue.md', 'utf8');
export default {
  current: '',
  docName: '',
  isSidebarOpen: false,
  examples: {
    Bootstrap: {
      content: bootstrapMD,
      name: 'Bootstrap.md'
    },
    React: {
      content: reactMD,
      name: 'React.md'
    },
    Vue: {
      content: vueMD,
      name: 'vueMD.md'
    }
  }
}
