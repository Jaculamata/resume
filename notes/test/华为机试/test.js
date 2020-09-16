var partitionLabels = function(S){
    let flag=[];
    let last_index_all=[];
    let result=[];
    let result_num=[]
    function check(s1,start_index){
        let last_index=start_index-1;
        if(start_index===S.length){
            return S.length-1
        }
        for(let i = start_index; i<S.length; i++){
            if(S[i] === s1){
                last_index=i;
            }
        }
        return last_index;
    }
    function max_num(m,n){
        let res=m;
        for(let i=m;i<n;i++){
             if(last_index_all[i]>res){
                 res=last_index_all[i];
             }
        }
        return res;
    }
    for(let k=0;k<S.length;k++){
        last_index_all.push(check(S[k],k+1))
    }

    for(let j = 0; j<last_index_all.length;){
        
        max_index = max_num(j,last_index_all[j]);
        if(max_index>last_index_all[j]){
            j=max_index;
        }else{
            result.push(last_index_all[j]);
            j = last_index_all[j]+1;
        }

    }
    for(let i=0;i<result.length;i++){
        if(i===0){
            result_num.push(result[0]+1);
        }else{
            result_num.push(result[i]-result[i-1]);
        }
    }
    return result_num
}


test_string='ababcbacadefegdehijhklij'
alert(partitionLabels(test_string))