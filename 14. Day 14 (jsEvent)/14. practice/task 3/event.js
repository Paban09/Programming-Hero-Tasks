document.getElementById('btn-post').addEventListener('click',()=>{
    const commentBox=document.getElementById('comment');
    const comment=commentBox.value;
    const paragraph=document.getElementById('paragraph');
    const p=document.createElement('p');
    p.innerText=comment;
    paragraph.appendChild(p);
    commentBox.value='';
});