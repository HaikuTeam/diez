/**

*/
class Reference {
  constructor({
    something = "this is a reference"
  } = {}) {
    /**
Value: &quot;this is a reference&quot;
*/
    this.something = something;
  }
}


module.exports.Reference = Reference;

/**

*/
class ChildComponent {
  constructor({
    diez
  }) {
    /**
Value: 10
*/
    this.diez = diez;
  }
}


module.exports.ChildComponent = ChildComponent;

ChildComponent.prototype.purr = () => {};

/**

*/
class EmptyComponent {
  constructor({
  } = {}) {
  }
}


module.exports.EmptyComponent = EmptyComponent;

/**
Test object comment
*/
class Primitives {
  constructor({
    reference = {},
    number = 10,
    integer = 10,
    float = 10,
    string = "ten",
    boolean = true,
    integers = [[1, 2], [3, 4], [5]],
    strings = [[["6"], ["7"]], [["8"], ["9"]], [["10"]]],
    emptyList = [],
    child = {diez: 10},
    childs = [[{diez: 10}]],
    emptyChild = {}
  } = {}) {
      /**
Test nested reference

Value: {}
*/
    this.reference = new Reference(reference);
    /**
Test property comment

Value: 10
*/
    this.number = number;
    /**
Value: 10
*/
    this.integer = integer;
    /**
Value: 10
*/
    this.float = float;
    /**
Value: &quot;ten&quot;
*/
    this.string = string;
    /**
Value: true
*/
    this.boolean = boolean;
    /**
Value: [[1, 2], [3, 4], [5]]
*/
    this.integers = integers;
    /**
Value: [[[&quot;6&quot;], [&quot;7&quot;]], [[&quot;8&quot;], [&quot;9&quot;]], [[&quot;10&quot;]]]
*/
    this.strings = strings;
    /**
Value: []
*/
    this.emptyList = emptyList;
      /**
Value: {diez: 10}
*/
    this.child = new ChildComponent(child);
    this.childs = childs.map((value1) => value1.map((value2) => new ChildComponent(value2)));
      /**
Value: {}
*/
    this.emptyChild = new EmptyComponent(emptyChild);
  }
}

Object.defineProperty(Primitives, 'name', {value: 'Primitives'});

module.exports.Primitives = Primitives;

