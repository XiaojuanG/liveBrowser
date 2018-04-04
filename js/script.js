$(function () {
	// 页面切换
	$(".ppt-show-btn ").click(function(){
		
		
	  if($('#left-video').is('.left-video')){
	  		$('.img-switch').addClass('img-switch-hidden');
	  		$("#left-video").removeClass("left-video");
	  		$("#123l").css("display","none");
	  		$("#left-video").addClass("left-video-hidee");
	                 
	    }else{
	    	$('.img-switch').removeClass('img-switch-hidden');
	    	$("#left-video").addClass("left-video");
	    	$("#123l").css("display","block");
	    	$("#left-video").removeClass("left-video-hidee");
	    }
	    if($('#right-ppt').is('.right-ppt')){
	  		$("#right-ppt").removeClass("right-ppt");
	  		// $("#123l").css("display","none");
	  		$("#right-ppt").addClass("right-ppt-hidden");
	                 
	    }else{
	    	$("#right-ppt").addClass("right-ppt");
	    	// $("#123l").css("display","block");
	    	$("#right-ppt").removeClass("right-ppt-hidden");
	    }
	 
	  
	  
	  
	});
	// tab选项卡
	$("#tab ol li").click(function(){
        now=$(this).index();
        tab();
    });
    function tab(){
        $("#tab ol li").eq(now).addClass('active').siblings().removeClass('active');
        $("#tab ul li").eq(now).addClass('cur').siblings().removeClass('cur');
    }
    //微信弹出层
    $('.sharebtn-wechat').click(function() {
    	var imgHtml ="<div style='text-align:center;margin-top:5%'><img src='./images/2.png'  /></div>"; 
     	var textHtml1 = "<p style='text-align:left;font-size: 12px;line-height: 22px;color: #666;text-indent:1em'>打开微信，点击底部的“发现”，</P>";
     	var textHtml2 = "<p style='text-align:left;font-size: 12px;line-height: 22px;color: #666;text-indent:1em'>使用“扫一扫”即可将网页分享至朋友圈。</P>";
    layer.open({  
        type: 1,   
        title: '分享到微信朋友圈',  
        area: ['350px', '420px'],
        content: imgHtml+textHtml1+textHtml2, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响  
         
    });  
    
    });
    //ppt隐藏效果
    if ($('#chat').val() ==2) {
    	$('#right-ppt').css({
    			display: 'none',
    		});
            $('#common-box').removeClass('common-box')
    		$('#common-norank').removeClass('common-norank');
    		$('#common-norank').addClass('common-norank-hidden');
    	}else{
    		$('#right-ppt').css({
    			display: 'block',
    		});
    		$('#common-norank').removeClass('common-norank-hidden');
    		$('#common-norank').addClass('common-norank');
    	}
    
    //弹幕按钮
    $('.dm-check').click(function() {
        // console.log(123);
         if($('#btn-off').is('.btn-off-yes')){
            //console.log(456);
             $('#btn-off').addClass('btn-off-hidden');
             $("#btn-off").removeClass("btn-off-yes");
             $("#btn-on").removeClass("btn-on-hidden");
                     
        }else{
           $('#btn-off').addClass('btn-off-yes');
             $("#btn-off").removeClass("btn-off-hidden");
             $("#btn-on").addClass("btn-on-hidden");
        }
       
    });	
    // 投票
    $('.vote-icon').on('click', function() {
        if ($('#vote-content').is('.vote-content-hidden')) {
            $('#vote-content').removeClass('vote-content-hidden')
        }else{
            $('#vote-content').addClass('vote-content-hidden')
        }
        if ($('#vote-wrap').is('.vote-content-hidden')) {
            $('#vote-wrap').removeClass('vote-content-hidden')
        }else{
            $('#vote-wrap').addClass('vote-content-hidden')
        }
    });
    $('.vote-box-close').on('click', function() {
         $('#vote-content').addClass('vote-content-hidden')
    });
    $('.vote-img-close').on('click', function() {
        $('#vote-wrap').addClass('vote-content-hidden')
        
    });
    //打赏
    $('#icon-reward').on('click', function() {
        $('.reward-wrap').removeClass('index-display');
    });
    $('#reward-pay-close').on('click', function() {
        $('#reward-wrap').css(
            "display",'none'
        );
    });
    $('.pay-btn').on('click', function() {
         $('.layer-box').removeClass('index-display')
        $('.reward-layer-shade').removeClass('index-display')
    });;
    $('.close-icon').on('click', function() {
        $('.layer-box').addClass('index-display')
        $('.reward-layer-shade').addClass('index-display')
        
    });
    
})
