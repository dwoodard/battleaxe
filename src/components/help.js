export default function () {
  console.log(`
Usage:
    battleaxe <command> [options]

Commands:
    plan      Output the apply plan before actually applying
    apply     Apply the current config to your infrastructure
    cleanup   Remove all resources that are no longer in state

Options:
    (none yet)
`)
}
