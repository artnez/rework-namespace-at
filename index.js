function visit(rule) {
  if (rule.rules) {
    rule.rules = rule.rules.filter(visit.bind(this));
    return true;
  } else {
    return inject.call(this, rule);
  }
}

function inject(rule) {
  if (rule.type == 'namespace') {
    this.namespace = rule.namespace == 'end' ? null : rule.namespace;
    return false;
  }
  rule.selectors = rule.selectors.map(append.bind(this));
  return true;
}

function append(selector) {
  if (!this.namespace) {
    return selector;
  }
  if (selector == ':local') {
    return this.namespace;
  }
  return this.namespace + ' ' + selector;
}

module.exports = function() {
  return function(sheet) {
    var ctx = {namespace: null};
    sheet.rules = sheet.rules.filter(visit.bind(ctx));
  };
};
