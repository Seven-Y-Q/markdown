import fs from 'fs';
import pouchdb from 'pouchdb';

const bootstrapMD = fs.readFileSync(__dirname + '/bootstrap.md', 'utf8');
const reactMD = fs.readFileSync(__dirname + '/react.md', 'utf8');
const vueMD = fs.readFileSync(__dirname + '/vue.md', 'utf8');
const db = new pouchdb('Markdown');
export default {
  current: '',
  currentRev: '',
  docName: '',
  isSidebarOpen: false,
  list: [],
  isShowModal: false,
  db,
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
