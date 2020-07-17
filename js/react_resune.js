new Vue({
  el: '#resume',
  data: {
  	img : './pic/me.jpg',
    name: '黄涛',
    email: '819436557@qq.com',
    phone: '15342227773',
    jobtimes : '2019-7',
    job : '求职意向：前端工程师',
    salaryname : '薪资',  
    salary : '12~18',
    jobtimesale : '11',
    education_ba : '教育背景',
    education : [
	{
    	school : '华中科技大学',
    	region : '湖北',
    	time : '2017-2019 ',
    	degree : '硕士',
    	professional : '计算机技术',
    	course : '硕士研究生',
	},
	{
		school : '华中科技大学',
    	region : '湖北',
    	time : '2012-2016 ',
    	degree : '学士',
    	professional : '能源与动力工程',
    	course : '硕士研究生',
	
	}],
    work_experience : '工作经历',
    work_info : [
	{
		id : '1',
    		company : '招商银行武汉分行',
	    	region : '湖北',
	    	job_position : '数据分析岗',
	    	times : '2019.7~至今',
	}
    ],
    project_experience : '项目经历',
    project_info : [
	     {
    		id : '1',
    		projuct_name : '数据安全等级测试工具',
    		name : '实验室项目',
	    	job_position : '主要开发人员',
	    	times : '2017.3~2017.12',
	    	values : [{
	    		info : '项目概述：数据库安全等级测试工具主要由用户界面、服务器，系统数据库和测试引擎四部分构成，用各个模块之间的协同合作共同满足用户的各种http请求。系统数据库提供对系统内部各种数据的存储和管理，测试引擎分析测试用例，并在被测数据库中执行相应的命令，最终将结果返回给服务器，服务器通过前台的用户界面将测试结果返回给测试员，同时将测试结果存入系统数据库中。用户界面提供各种图形化接口，能够满足用户的各种测试需求，引擎部分提供远程命令调用和第三方jar包调用，在不改变整体架构的情况下，可以很方便地扩展后续的测试功能。用户界面主要分为标准框架管理子系统和标准测评子系统两个部分，给用户提供图形化界面，方便用户管理各种标准框架和测试内容，服务器部分有消息队列，控制器等功能模块。',
	    	},{
				info : 'Ide是IDEA ，使用的框架是SSM ，使用Maven进行项目管理，项目的前端框架是easyUI',
	    	},{
				info : '主要工作：前期负责测试员前端界面的设计，以及后端相应数据库增删改查的实现。中期负责优化项目中各个模块的连接，对前端与后端的接口，后端与数据库的接口，数据库结构都进行了重新设计，使得项目结构更合理。修改了前后端的通信的方式，从单纯的轮询修改为后端得到结果才向前端推送结果。对easyUI的源码进行修改使得能够实现远程控制，快速导航等原本不支持的功能。后期对项目各个部分进行优化，使得前端页面的打开速度提升26%，前端页面执行流畅程度也有显著提升，服务器也能正确支处理并发操作',
	    	}],
	    	describe : '',
    	}
    ],
    person_product : '个人项目',
    person_info : [


    ],
    skills : '技能',
    skills_info : [
    	{
    		id : '1',
    		name : '语言',
	    	language : 'HTML/CSS/Javascript/python/java',
    	},
    	{
    		id : '3',
    		name : '框架',
	    	language : 'Jquery/Bootstrap/vue/easyUI',
    	},
    	{
    		id : '4',
    		name : '数据库',
	    	language : 'MySql',
    	},
    ],
    other : '其他',
    other_list : [
    	{
    		id : '1',
    		name : 'github',
	    	language : 'https://github.com/Jaculamata',
    	}
    ]
  },
  methods:{
  	date : function(data){
  		var jobdate = this.jobtime(data,this.start());
		this.jobtimesale = jobdate;
  		return jobdate;
  	},
  	start : function(){
  		  var date = new Date();
		    var y = date.getFullYear();  
		    var m = date.getMonth() + 1;
		    var d = date.getDate();
		 if(d>=15){
		    m=m+1;
		   }
		   if(m>12){
			y= y+1;
		   	m=m-12;
		   }
		    m = m < 10 ? ('0' + m) : m;
	          
		  
		    return y+'-'+m;
  	},
  	jobtime : function(start,end){
  		var staryear = start.split('-'),
  			endyear = end.split('-');
  		var month = '',year = '';
		if(endyear[1]-staryear[1]<0){
			endyear[0] = endyear[0]-1;
			month = Number(endyear[1])+12-Number(staryear[1]);
		}else{
			month = endyear[1]-staryear[1];
		}
		year = endyear[0]-staryear[0];
		return year+'年'+month+'月';
  	},
	salarys : function(data){
		var salar = data.split('~');
		let start = Number(salar[0]),
			end =  Number(salar[1])
		let year = Number(this.jobtimesale.split('年')[0]),month = Number(this.jobtimesale.split('年')[1].split('月')[0]);
		if(year>=2){
		    let syear = year-1;
		    start+=syear+2;
		    end+=syear+2;
		}
		if(month>6){
			let smonth = (month)/3;
		    start+=smonth*0.5;
		    end+=smonth*0.5;	
		}
		return start.toFixed(1)+'~'+end.toFixed(1);
	}
  }
})
