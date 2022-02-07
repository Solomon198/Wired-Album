import styled from 'styled-components';

const WordMatch =  styled.span`
   font-weight: bold;
   font-style: italic;
   color: red;
`
function composeTitleWithJSX(titleArr){
   let title = <> 
   {titleArr.map((item)=> <>{item} {' '}</>)}
 </>
   
   return title;
}

function Search(searchText,photo){
    let photoTitle = photo.title;
    let newTitleArray = [];
    const photoTitleToArray = photoTitle.split(' ');
    let foundMatch = false;
    photoTitleToArray.forEach((str)=>{
        const doSearch = str.indexOf(searchText);
        if(doSearch >= 0 && searchText.trim()){
            foundMatch = true;
            newTitleArray.push(<WordMatch>
                {str}
            </WordMatch>)
        }else {
            newTitleArray.push(str);
        }
    })

    if(foundMatch){
        return {...photo,title:composeTitleWithJSX(newTitleArray)}
    }

    
}

function SearchAlbum(searchText,album){
    // returns 
    const searchResult = [];
    album.forEach((photo)=>{
       const result =  Search(searchText,photo);
       if(result){
           searchResult.push(result);
       }
    })

    return searchResult

}
const Utils = {SearchAlbum};
export default Utils;