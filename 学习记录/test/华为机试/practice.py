import sys 
def judge(dif,condition):
    if condition =='>':
        if dif>0:
            return True
        return False
    elif condition == '>=':
        if dif>=0:
            return True
        return False
    elif condition == '<':
        if dif<0:
            return True
        return False
    elif condition == '<=':
        if dif<=0:
            return True
        return False
    elif condition == '=':
        if dif==0:
            return True
        return False
if __name__ == "__main__":
    line_in = sys.stdin.readline().strip().split(';')
    line_length=len(line_in)
    condition_in=list(map(str,line_in[line_length-1].split(',')))
    b_in = list(map(float,line_in[line_length-2].split(',')))
    x_in = list(map(float,line_in[line_length-3].split(',')))
    result = True
    max_result=0
    for i in range(line_length-3):
        a_i_in = list(map(float,line_in[i].split(',')))
        sum_i=0
        for j in range(len(a_i_in)):
            sum_i += a_i_in[j]*x_in[j]
        dif = sum_i-b_in[i]
        if dif > max_result:
            max_result=dif
        result_i=judge(dif,condition_in[i])
        if result_i==False:
            result=False

    print(result,int(max_result))
