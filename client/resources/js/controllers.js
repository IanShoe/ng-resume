function indexCtrl ($scope, $location, MessageService){
	$scope.navClick = function(){
		$(".navbar-collapse").removeClass("in").addClass("collapse");
	}
	$scope.location = $location;

	$scope.$watch('location.path()', function(newValue, oldValue){
		$scope.activeNav = newValue.split('/')[1];
	});
}

function homeCtrl ($scope){
	
}

function aboutCtrl ($scope){
	
}

function contactCtrl ($scope){
	
}

function resumeCtrl ($scope, ResumeService){
	$scope.resume = ResumeService.getResume();
}

function resumeBuilderCtrl ($scope, ResumeService){
	$scope.generalResumeFields = [{
		label: 'Name',
		type: 'text',
		model: 'resume.name',
		placeholder: 'Enter name',
		required: false
	},
	{
		label: 'E-mail',
		type: 'text',
		model: 'resume.email',
		placeholder: 'Enter Email',
		required: false
	},
	{
		label: 'Name',
		type: 'text',
		model: 'resume.name',
		placeholder: 'Enter name',
		required: false
	},
	{
		label: 'Name',
		type: 'text',
		model: 'resume.name',
		placeholder: 'Enter name',
		required: false
	}]
	$scope.resume = ResumeService.getResume();
}