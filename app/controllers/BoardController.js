'use strict';
app.controller("BoardController", function($scope, $scope.RouteParams, BoardFactory, PinFactory) {
	let boardId = $routeParams.boardId;

	BoardFactory.getStyleBoard(boardId)
	.then((board w/ ID q 123){
		FBUrl/pins?orderby="boardId"$equalTo="${boardId}"
	})
	PinFactory.getPins(boardId)
})