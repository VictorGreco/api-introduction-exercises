import axios from "axios";
import $ from "jquery";

/**
 * 1. Get the list of posts from the following endpoint:
 *
 *    https://jsonplaceholder.typicode.com/posts?_limit=6
 *
 * Then once you have the data, for each post:
 *
 * 2. Create a `div` element with the class of `post` that
 *    has a `p` child element with the class of `post__title`
 *    and a text content with the value from the posts `title`
 *    property fetched form the api and another `p` element
 *    with the text content of the value from the posts `body`
 *    property.
 *
 * 3. Append each `post` div element as a child element
 *    of the `ex4-container` container element
 *
 * You should use the axios.get() method to fetch the data.
 *
 * @example
 * <div class="ex4-container">
 *   <div class="post">
 *     <p class="post__title">provident occaecati</p>
 *     <p>quia et suscipit</p>
 *   </div>
 *   <div class="post">
 *     <p class="post__title">iplsum slipsum</p>
 *     <p>etquia let prinspat</p>
 *   </div>
 * </div>
 */
function exercise04() {
  // Complete the code of the function
  // Make sure to return the axios.get() method call
  //
  // return axios.get()...
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=6';
  const createElement = (tag, attributes) => Object.assign(document.createElement(tag), attributes);
  return axios.get(url)
    .then(response => {
      debugger;
      const $container = document.querySelector('.ex4-container');
      const data = response.data;

      data.forEach(post => {
        const $post = createElement('div', { class: 'post' });
        const $title = createElement('p', { class: 'post_title', textContent: post.title });
        const $excerpt = createElement('p', { textContent: post.body });

        $post.appendChild($title);
        $post.appendChild($excerpt);

        $container.appendChild($post);
      });
    })
}

export default exercise04;
