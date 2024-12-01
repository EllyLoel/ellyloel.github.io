import markdown from '../plugins/markdown.cjs';

export default (content = "") => markdown.library.render(content);
