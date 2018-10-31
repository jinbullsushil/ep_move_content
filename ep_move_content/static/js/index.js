exports.aceInitInnerdocbodyHead = function(hook_name, args, cb) {
  args.iframeHTML.push('<script type="text/javascript" src="../static/plugins/ep_move_content/static/js/ace_inner.js"></script>');
  return cb();
};
