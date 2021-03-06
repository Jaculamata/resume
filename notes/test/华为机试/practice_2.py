#coding=utf-8
# 本题为考试多行输入输出规范示例，无需提交，不计分。
import sys
if __name__ == "__main__":
    # 读取第一行的n
    n = int(sys.stdin.readline().strip())
    ans = 0
    last_min_res_index = -1
    for i in range(n):
        # 读取每一行
        line = sys.stdin.readline().strip()
        # 把每一行的数字分隔后转化成int列表
        values = list(map(int, line.split()))
        min_res=999999
        min_res_index=-1
        for v in range(len(values)):
            if values[v] < min_res and v != last_min_res_index:
                min_res = values[v]
                min_res_index = v
        ans += min_res
        last_min_res_index=min_res_index
    print(ans)