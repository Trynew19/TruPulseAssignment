export function parseMessage(content) {
  const slashCommand = content.match(/^\/(\w+)\s*(.*)$/);
  if (slashCommand) {
    return {
      pluginName: slashCommand[1],
      args: slashCommand[2],
    };
  }
  return null;
}