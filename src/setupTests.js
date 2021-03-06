import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import {configure as configureEnzyme} from 'enzyme'
import createChaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import dirtyChai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'

configureEnzyme({ adapter: new Adapter() })
chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(chaiJestSnapshot)
  .use(createChaiEnzyme())
  .use(sinonChai)


expect.addSnapshotSerializer(enzymeToJSON)

