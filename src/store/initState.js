import fs from 'fs';

const bootstrapMD = fs.readFileSync(__dirname + '/bootstrap.md', 'utf8');
export default {
  current: '',
  examples: {
    Bootstrap: bootstrapMD,
    React: ''
  }
}
