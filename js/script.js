{

  const titleClickHandler = function(event){
    const clickedElement = this;
    event.preventDefault();

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post');

    for (let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] find the correct articl≠e using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* [DONE]add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };


  /* Generate title links*/

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

  const addClickListenerToTitle = function(){
    const links = document.querySelectorAll('.titles a');
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  };

  function generateTitleLinks(customSelector = ''){

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    for (let article of articles){

      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');

      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* [DONE] get the title from the title element */
      const linkHTML ='<li><a href="#'+ articleId +'"><span>'+articleTitle+'</span></a></li>';
      /* [DONE] create HTML of the link & insert link into titleList */
      titleList.insertAdjacentHTML('beforeend', linkHTML);
    }
    addClickListenerToTitle();
  }
  generateTitleLinks ();



  function generateTags(){
    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* [DONE]START LOOP: for every article: */
    for (let article of articles) {

      /* [DONE]find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);


      /* [DONE] make html variable with empty string */
      // let html = ''; Not used!

      /*[DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* [DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray) {


        /*[DONE] generate HTML of the link */
        const linkHTML = '<li><a href="#tag-'+ tag +'"> '+ tag +'</a></li>';

        /*[DONE - unused] add generated code to html variable */


        /*[DONE] insert HTML of all the links into the tags wrapper */
        tagsWrapper.insertAdjacentHTML('beforeend', linkHTML);

        /*[DONE] END LOOP: for each tag */
      }

    /* END LOOP: for every article: */
    }


  }

  generateTags();


  const tagClickHandler = function(event){
    /*[DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /*[DONE] prevent default action for this event */
    event.preventDefault();

    /*[done] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /*[done] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    /*[done] START LOOP: for each active tag link */
    for (let activeTag of activeTags) {

      /*[done] remove class active */
      activeTag.classList.remove('active');
    }

    /* find all tag links with "href" attribute equal to the "href" constant */
    const allLinksToOneTag = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for (let allLinkToOneTag of allLinksToOneTag) {
    /* add class active */
      allLinkToOneTag.classList.add('active');
    }
    /*[DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

  };

  const  addClickListenersToTags = function (){
    /* find all links to tags */
    const allLinksToTags = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for (let linkToTags of allLinksToTags) {

      /* add tagClickHandler as event listener for that link */
      linkToTags.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
  };

  addClickListenersToTags();

  const authorClickHandler = function (event) {
    console.log('Link was clicked');
    event.preventDefault();
    const href = this.getAttribute('href');
    const author = href.replace('#', '');

    const activeAuthors = document.querySelectorAll('a.active[href^="#"');
    for (let activeAuthor of activeAuthors) {
      activeAuthor.classList.remove('active');
    }

    const linkAuthors = document.querySelectorAll('a[href=" '+href+' "]');
    for (let linkAuthor of linkAuthors) {
      linkAuthor.classList.add('active');
    }
    generateTitleLinks('[data-author ="'+author+'"]');
  };

  // Generate Author links

  const generateAuthors = function () {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* find & get author name in the article */
    for (let article of articles) {
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      const articleAuthor = article.getAttribute('data-author');
      /* connect author name with the link */
      const linkHTML = '<a href="#'+articleAuthor+'">'+articleAuthor+'</a>';
      /* insert HTML of all links into tags wrapper */
      authorWrapper.insertAdjacentHTML('beforeend', linkHTML);
    }
  };
  generateAuthors();


  const addClickListenersToAuthor = function () {
    const allLinksToAuthors = document.querySelectorAll('.post-author a');
    for (let linksToAuthor of allLinksToAuthors) {
      linksToAuthor.addEventListener('click', authorClickHandler);
    }
  };
  addClickListenersToAuthor ();
}

