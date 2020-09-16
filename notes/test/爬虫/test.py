#!/usr/bin/python
# -*- coding: UTF-8 -*-

import requests
import re
import pandas
import numpy

from bs4 import BeautifulSoup
zhaobiao_url = 'http://www.ccgp-hubei.gov.cn:8050/quSer/search'
sheng_url = 'http://www.ccgp-hubei.gov.cn/notice/cggg/pzhbgg/index_1.html'
page_path1 ='http://www.ccgp-hubei.gov.cn/notice/cggg/pzhbgg//'
shi_url =   'http://www.ccgp-hubei.gov.cn/notice/cggg/czbgg/index_1.html'
page_path2 ='http://www.ccgp-hubei.gov.cn/notice/cggg/czhbgg//'
base_path='http://www.ccgp-hubei.gov.cn/'
def download_page(url):
	headers = {
	'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36'
	}
	try:
		data = requests.get(url, headers = headers).content
		return data
	except ConnectionError:
		print("connection error")
	except:
		print("try again")
	return None

def paser_html(html):
	soup = BeautifulSoup(html, 'html.parser')
	ul_lists = soup.find_all("ul")
	if len(ul_lists)!=0:
		res=ul_lists[0]
	else:
		return "no match content"
	for i in ul_lists:
		if "news-list-content" in  i['class']:
			res = i
			break
	return res

def init_page(html):
	soup = BeautifulSoup(html, 'html.parser')
	ul_lists = soup.find_all("ul")
	if len(ul_lists)!=0:
		res = ul_lists[0]
	else:
		return "no match content"
	for i in ul_lists:
		if "pagination" in i['class']:
			page_string=i.find_all('li')[-1].string
			page_nums=int(str(page_string).split('/')[1].split('页')[0])
			break
	return page_nums

def detail_page(html,title):
	soup = BeautifulSoup(html,'html.parser')
	condidate_p = soup.find_all("p")
	detail_data={"title" : title}
	for p in condidate_p:
		if p.find('table'):
			tmp=[s.extract() for s in p('table')]
		str_p=p.text.strip('\r\n\t').strip('\xa0').strip().split('：')
		if(len(str_p)<2):
			continue
		key = str_p[-2]
		values=str_p[-1]
		detail_data[key]=values
		# pattern=re.compile('供应商名称')
		# element=soup.find_all(string=pattern)
	return  detail_data

def main():
	#print(paser_html(download_page(shi_url)))
	key_words='医院'
	data=[]
	# project_id=0
	page_path = page_path1
	#初始化、首次访问后确定总共的页数，然后确定范围
	nums = init_page(download_page(page_path+'index_1.html'))
	for num in range(nums):
		final_page = page_path+'index_'+str(num+1)+'.html'
		news_list=paser_html(download_page(final_page)).find_all('li')
		for link in news_list:
			title=str(link).split(']')[2].split('<')[0]
			title=link.text
			if("医院" in title):
				detail_page_address=base_path+link.a['href']
				data.append(detail_page(download_page(detail_page_address),title))
				
	# workbook = xlsxwriter.Workbook('./rec_data.xlsx')
	# worksheet = workbook.add_worksheet()
	# bold_format = workbook.add_format({'bold': True})
	heads=['项目名称','供应商名称','供应商地址','中标金额','购买物品名称','时间','联系人','联系方式']
	f = open("./data3.txt",'a',encoding='utf-8')
	for i in data:
		f.write(str(i)+'\n')
	# print(paser_html(download_page(zhaobiao_url)))
	f.close()

if __name__ == '__main__':
	main()