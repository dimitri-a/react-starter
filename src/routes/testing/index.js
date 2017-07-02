/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Testing from './Testing';

const title = 'Testing Us';

function action() {
  return {
    chunks: ['Testing'],
    title,
    component: <Layout><Testing title={title} /></Layout>,
  };
}

export default action;
