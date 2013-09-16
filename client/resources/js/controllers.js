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

	$scope.states = [{name:'PA'},{name:'MD'}]

	$scope.generalResumeFields = [{
		label: 'Name',
		type: 'text',
		model: 'resume.name',
		placeholder: 'Enter Name',
		required: true
	},
	{
		label: 'E-mail',
		type: 'text',
		model: 'resume.email',
		placeholder: 'Enter Email',
		required: false
	},
	{
		label: 'Telephone',
		type: 'text',
		model: 'resume.tel',
		placeholder: 'Enter Telephone',
		required: false
	},
	{
		label: 'Occupation',
		type: 'text',
		model: 'resume.occupation',
		placeholder: 'Enter Occupation',
		required: true
	},
	{
		label: 'Street',
		type: 'text',
		model: 'resume.address.street',
		placeholder: 'Enter Street Address',
		required: false
	},
	{
		label: 'State',
		type: 'select',
		multipe: false,
		model: 'resume.address.state',
		optionsExpression: 'state.abbrev for state in states'
	},
	{
		label: 'Zip',
		type: 'text',
		model: 'resume.address.zip',
		placeholder: 'Enter Zip',
		required: false
	},
	{
		label: 'Objective',
		type: 'textarea',
		model: 'resume.objective',
		placeholder: 'Describe Your Objective',
		required: false
	}]
	$scope.resume = ResumeService.getResume();
}

function jobsCtrl ($scope){

	$scope.newJob = function(){
		$scope.resume.jobs.push({});
	}

	$scope.removeJob = function(job){
		$scope.resume.jobs.remove(job);
	}

	$scope.newDetail = function(job){
		job.details.push({});
	}

	$scope.removeDetail = function(job, detail){
		job.details.remove(detail);
	}
}

function collegeCtrl ($scope){

	$scope.newCollege = function(){
		$scope.resume.education.colleges.push({});
	}

	$scope.removeCollege = function(college){
		$scope.resume.education.colleges.remove(college);
	}

	$scope.newCourse = function(college){
		college.courses.push({});
	}

	$scope.removeCourse = function(college, course){
		college.courses.remove(course);
	}
}