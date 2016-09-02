$(document).ready(function(){
 
  // show hint on focus
  /*$("input#task-title").focus(function(){
	  $(this).parents(".controls").find(".alert").fadeIn('slow');
	});
  $("input#task-title").blur(function(){
	  $(this).parents(".controls").find(".alert").fadeOut();
	});*/
  
      //turn to inline mode
    $.fn.editable.defaults.mode = 'inline';
	
	
	//Enable/Disable edit mode on inputs via Enable button
	$('#enable').click(function() {
	  $(".view-mode-actions").toggle();
	  $(".edit-mode-actions").toggle();
	  $(".task-form .form-actions").toggle();
	  $(this).parents('form').addClass("edit-mode");
	  $('.task-form .editable-select').select2('enable',true);
	  $('.task-form table.content-table input[type=checkbox]').attr('disabled',false);
	  $('.task-form table.content-table .btn').removeClass("disabled");
	  $('.editable').editable('toggleDisabled');
	  $(".edit-guidance").show();
	});
	
	$(".cancel-edit").click(function(){
	  $(".view-mode-actions").toggle();
	  $(".edit-mode-actions").toggle();
	  $(".task-form .form-actions").toggle();
	  $(this).parents('form').addClass("view-mode");
	  $('.task-form .editable-select').select2('enable',false);
	  $('.task-form table.content-table input[type=checkbox]').attr('disabled',true);
	  $('.task-form table.content-table .btn.remove-btn').addClass("disabled");
	  $(this).parents('form').removeClass("edit-mode").addClass("view-mode");
	  $('.editable').editable('toggleDisabled');
	  $(".edit-guidance").hide();
	  });
	
    $('.date-input').editable({
        format: 'yyyy-mm-dd',
        viewformat: 'MM d, yyyy',
        send: 'never',
		mode:'inline',
		 datepicker: {
        weekStart: 7
      }
    });
	 
	//$('.complete-p').editable('disable');
	$(".work-items-container table.content-table tr").hover(function(){
			//$(this).find("a.editable-click").css({"color":"red","border-bottom":"1px dashed blue"});
			$(this).find("a.editable-click").addClass("edit");
			//alert("ss");
		},
		
		function(){
			//$(this).find("a.editable-click").css({"color":"#333","text-decoration":"none"});
			$(this).find("a.editable-click").removeClass("edit");
		});
	$('.complete-p').editable({
	  value: 1,
	  mode:'popup',
	  showbuttons:false,
	  title:'Change complete precent',
	  inputclass:'input-small',
	  source: [
	  {value: 1, text: '0%'},
	  {value: 2, text: '25%'},
	  {value: 3, text: '50%'},
	  {value: 4, text: '75%'},
	  {value: 5, text: '100%'}
	  ]
	});
	
	 $('.end-date').editable({
		format: 'yyyy-mm-dd',
		viewformat: 'dd/mm/yyyy',
		mode:'popup',
		showbuttons:false,
		datepicker: {
		weekStart: 1
			}
	});
	 
	$('#status').editable({
	  value: 2,
	  inputclass : "input-large",
	  source: [
	  {value: 1, text: 'All'},
	  {value: 2, text: 'Live'},
	  {value: 3, text: 'Pending'},
	  {value: 4, text: 'Suspended'},
	  {value: 5, text: 'Completed'}
	  ]
	}); 
 
	 $('#leader').editable({
	  value: 2,
	  inputclass : "input-large",
	  source: [
		{value: 1, text: 'Division 6 - Role 1'},
		{value: 2, text: 'Division 6 - Role 2'},
		{value: 3, text: 'Division 7 - Role 1'},
		{value: 4, text: 'Division 7 - Role 2'},
		{value: 5, text: 'Division 7 - Role 3'}
	  ]
	});
	
	$('#priority').editable({
	  value: 2,
	  inputclass : "input-large",
	  source: [
		{value: 1, text: 'Urgent'},
		{value: 2, text: 'Not Urgent'},
		{value: 3, text: 'Critical'},
		{value: 4, text: 'Minor'}
	  ]
	});
	
	$('#division').editable({
	  value: 2,
	  inputclass : "input-large",
	  source: [
		{value: 1, text: 'Division1'},
		{value: 2, text: 'Division2'},
		{value: 3, text: 'Division3'},
		{value: 4, text: 'Division4'}
	  ]
	});
	
	$('#organisation').editable({
	  value: 2,
	  inputclass : "input-large",
	  source: [
		{value: 1, text: 'Organisation1'},
		{value: 2, text: 'Organisation2'},
		{value: 3, text: 'Organisation3'},
		{value: 4, text: 'Organisation4'}
	  ]
	});
	 
	 $('#categ').editable({
		inputclass: 'input-xlarge',
		select2: {
			tags: ['html', 'javascript', 'css', 'ajax'],
			tokenSeparators: [",", " "]
		}
	});
	$('.people').editable({
		inputclass: 'input-xlarge',
		select2: {
			tags: ['John Doe', 'Manish S.', 'Robert D. Jr', 'Diana'],
			tokenSeparators: [",", " "]
		}
	});
	 
	//$('#categories,.people-list,.editable-select').select2();
	$(".editable-click,.editable-select").editable({
		title: 'Click to edit'
		});
	//$(".editable,.editable-select").attr("title","Click to edit");
	$('.date_picker').editable({
		format: 'yyyy-mm-dd',
		viewformat: 'dd/mm/yyyy',
		mode:'popup',
		datepicker: {
		weekStart: 1
	  }
	});
	
	$('#address').editable({
		url: '/post',
		validate: function(value) {
		  if(value.city == '') return 'city is required!';
		  },
		display: function(value) {
		  if(!value) {
			$(this).empty();
			return;
		  }
		  var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
		  $(this).html(html);
		  }
	  });
	
	$('.editable-select').select2("enable", true);
	$('.editable').editable('enable');
	
	//show comments area 
	$('#status').on('shown', function() {
	  $(this).parents(".controls").find(".input-container").toggle();
    });
	 
	 $('#status').on('hidden', function() {
	  $(this).parents(".controls").find(".input-container").toggle();
    });
	 $(".input-container").focus(function(){
		$(this).parents(".controls").find(".editable-container").show();
	  });
	 
	 $("#changeStatus").bind("change", function(){
			if($(this).attr('checked')){
				$(".status-group").slideToggle();
			}else if(!($(this).attr('checked'))){
				$(".status-group").slideToggle();
			}
		});
	
	/* Expand / Collapse table rows */ 
	function getChildren($row) {
        var children = [];
        while($row.next().hasClass('child-line')) {
             children.push($row.next());
             $row = $row.next();
        }            
        return children;
    }        

    $('.parent-line a.expand').on('click', function() {
        var children = getChildren($(this).parents("tr"));
        $.each(children, function() {
            $(this).toggle();
        });
		return false;
    });
	
	$('.tabs-table a:last').hide();
	$('.parent-line a.btn-mini').click(function(){
		var itemType = $(this).data("itemType");
		$(this).parents("tr.parent-line").next("tr.child-line").find("a[href='#"+ itemType + "']").toggle().tab('show');
		});
	
	
	/* Hide/Show work items details tabs base on the work item type selected */
	
	
	//Page hints
	$(".page-hints .close").click(function(){
		$(this).parents("body").find(".title-container a.expand-hints").show();
		$(this).parent().hide();
		return false;
		});
	$(".title-container a.expand-hints").click(function(){
	  $(this).parents("body").find(".page-hints").show();
	  $(this).hide();
	});
	
	/* Hide/Show work items on item task UI*/
	$(".task-item .btn.btn-expand").click(function(){
		if($(this).hasClass("active")){
			$(this).parents(".task-item").find(".work-items-container").slideUp("fast");
			$(this).parents(".task-item").find(".select-period").hide();
			expNr();
		}else{
			$(this).parents(".task-item").find(".work-items-container").slideDown("fast");
			$(this).parents(".task-item").find(".select-period").show();
		}
	});

	$("#detail-view").click(function(){
		if($(this).hasClass("active")){
			return;
		}else{
		    $(".tasks-list").removeClass("lite-display");
			$(".work-items-container").each(function() {
				$(this).slideDown("fast");
				$(this).parent(".task-item").find(".btn-expand").addClass("active");
				$(this).parent(".task-item").find(".select-period").show();
			});
		}
	});
	
	$("#summary-view").click(function(){
		if($(this).hasClass("active")){
			return;
		}else{
			$(".tasks-list").removeClass("lite-display");
			$(".work-items-container").each(function() {
			$(this).slideUp("fast");
				$(this).parent(".task-item").find(".btn-expand").removeClass("active");
				$(this).parent(".task-item").find(".select-period").hide();
			});
		}
	});
	$("#lite-view").click(function(){
		if($(this).hasClass("active")){
			return;
		}else{
			$(".tasks-list").addClass("lite-display");
		}
	});
	
	function expNr(){
		var expNrBtns = $(".btn.btn-expand.active").size();
		if(expNrBtns == 1) {
			$("#summary-view").addClass("active");
			$("#detail-view").removeClass("active");
		}
	}
	
	//Change Status label on hover
	var currentStatus = $(".dropdown-toggle.status").text();
	$(".status-group").hover(function(){
			$(this).find(".dropdown-toggle.status").addClass("cState").html("Change Status");
		},function(){
			if(!$(this).hasClass("open")){
				$(this).find(".dropdown-toggle.status").removeClass("cState").text(currentStatus);	
			}
		});
	$(".status-group .dropdown-menu li > a ").click(function(){
			var selected_status = $(this).parent().attr("class").toString();
			var sts = $(this).parents(".status-group").find(".dropdown-toggle.status");
			//alert(status);
			sts.text(selected_status).removeClass().addClass("btn dropdown-toggle status status-"+ selected_status);
			currentStatus = sts.text();
		});
	
	//Inline help for inputs
	$("input,select").focus(function(){
		if ($(this).next(".help-inline").length) {
			$(this).next(".help-inline").fadeIn().css("display","inline-block");
		} 
	});
	$("input,select").blur(function(){
		if ($(this).next(".help-inline").length) {
			$(this).next(".help-inline").fadeOut();
		} 
	});
	
});
