'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNFLEFBREYsSUFDTSxBQUROLGtCQUN3QixBQUR4QixrQkFFRSxBQUZGLElBRU0sQUFGTix1QkFFNkIsQUFGN0IsbUJBR0UsQUFIRixJQUdNLEFBSE4sZ0NBR3NDLEFBSHRDLDZCQUlFLEFBSkYsSUFJTSxBQUpOLG9DQUkwQyxBQUoxQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3BhcnVsNS9Eb2N1bWVudHMvQmxvY2tjaGFpbl9wcm8vYWxyZWFkeV9jb2RlL0dhaW5BLUdyYWluIn0=