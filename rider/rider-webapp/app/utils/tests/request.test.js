/*-
 * <<
 * wormhole
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

/**
 * Test the request function
 */

// import request from '../request'
import sinon from 'sinon'
// import expect from 'expect'

describe('request', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    sinon.stub(window, 'fetch')
  })

  // After each test, restore the fetch function
  afterEach(() => {
    window.fetch.restore()
  })

  // describe('stubbing successful response', () => {
  //   // Before each test, pretend we got a successful response
  //   beforeEach(() => {
  //     const res = new Response('{"hello":"world"}', {
  //       status: 200,
  //       headers: {
  //         'Content-type': 'application/json'
  //       }
  //     })
  //
  //     window.fetch.returns(Promise.resolve(res))
  //   })
  //
  //   it('should format the response correctly', (done) => {
  //     request('/thisurliscorrect')
  //       .catch(done)
  //       .then((json) => {
  //         expect(json.hello).toEqual('world')
  //         done()
  //       })
  //   })
  // })

  describe('stubbing error response', () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json'
        }
      })

      window.fetch.returns(Promise.resolve(res))
    })

    // it('should catch errors', (done) => {
    //   request('/thisdoesntexist')
    //     .catch((err) => {
    //       expect(err.response.status).toEqual(404)
    //       expect(err.response.statusText).toEqual('Not Found')
    //       done()
    //     })
    // })
  })
})
