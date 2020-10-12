
function merge(word1,word2){
    // console.log("merge ",word1,word2)
    let minLength=word1.length>word2.length?word2.length:word1.length,i=0;
    for(;i<minLength;i++){
        if(word1[word1.length-i]!==word2[word2.length-i]){
            console.log("merge false",word1,word2)
            return  false;
        }
    }
    console.log("merge true",word1,word2)
    return true;
}
function minLength(wordList){
    //某个单词是否完全属于另外一个，字典
    wordList=wordList.sort((a,b)=>b.length-a.length);
    console.log(wordList);
    let wordState={},resultString="",resultNums=[];
    for (let k = 0;k<wordList.length;k++){
        wordState[wordList[k]]=-1; //-1表示没有可以合并的单词或者未访问
    }
    console.log(wordState)
    for(let i = 0;i<wordList.length;i++){
        for(j = i+1;j<wordList.length;j++){
            console.log(wordState[wordList[j]])
            if(wordState[wordList[j]]!==-1){
                continue;
            }
            if(merge(wordList[i],wordList[j])){
                wordState[wordList[j]]=i;
            }
        }
    }
    //所有单词合并过程
    let presentLength=0;
    for(let key in wordState){
        console.log(key)
        if(wordState[key]==-1){//无法合并的单词，进行组合
            resultString= resultString+key+"#";
            resultNums.push(presentLength);
            presentLength+=resultString.length;
        }else{//可以合并的单词进行合并
            let locationNum=presentLength+wordList[wordState[key]].length-key.length;
            resultNums.push(locationNum)
             console.log(key,locationNum,resultNums)
        }
    }
    console.log(resultString)
return resultString.length;
}
