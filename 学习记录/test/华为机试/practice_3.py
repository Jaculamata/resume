import sys
relation=[[' '],[',','.'],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
if __name__ == "__main__":
    mode = 1;
    repeat_times=0
    result=[]
    a = sys.stdin.readline().strip()
    for i in range(len(a)):
        if a[i]=='/':
            continue
        if a[i]=="#":
            mode *= -1
        elif mode > 0:
            result.append(a[i])
        elif i!=len(a)-1 and a[i+1] == a[i]:
            repeat_times += 1
            relation[int(a[i])]
            continue
        else:
            tmp = relation[int(a[i])]
            result.append(tmp[repeat_times%len(tmp)])
            repeat_times = 0
    print(''.join(result))
