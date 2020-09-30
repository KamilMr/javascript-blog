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
      const articleSelector = clickedElement.getAttribute("href");
      
      /* [DONE] find the correct article using the selector (value of 'href' attribute) */
      const targetArticle = document.querySelector(articleSelector);
      
      /* [DONE]add class 'active' to the correct article */
      targetArticle.classList.add('active');
    }
    

    /* Generate title links*/ 

  const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

  function generateTitleLinks () {

      /* [DONE] remove contents of titleList */
      const titleList = document.querySelector(optTitleListSelector);
      titleList.innerHTML = '';

      /* [DONE] for each article */
      const articles = document.querySelectorAll(optArticleSelector);
      let html = '';
      
      for (let article of articles){
        
        /* [DONE] get the article id */
        const articleId = article.getAttribute("id");
        
        /* [DONE] find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        
        /* [DONE] get the title from the title element */
        const linkHTML ='<li><a href="#'+ articleId +'"><span>'+articleTitle+'</span></a></li>';
        
        /* [DONE] create HTML of the link */
        titleList.insertAdjacentHTML('beforeend', linkHTML);
        
        /* [DONE] insert link into titleList */
        html = html + linkHTML;
      }
      titleList.innerHTML = html;

  }
  generateTitleLinks ();

  
    const links = document.querySelectorAll('.titles a');
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
}