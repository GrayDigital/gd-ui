# Storybook

<!-- markdownlint-disable -->

<a href="https://main--618c059790d3e7003af59018.chromatic.com" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>

<!-- markdownlint-restore -->

## Goals

Create a UI framework that forms the basis for Gray Digital's web presence.

- Start by recreating [gray.digital](https://www.gray.digital) website, public facing.
- Expand to internal apps that help run Gray Digital. (Rippling, Greenbridge, Engineering Community of Practice, etc.)

### Stretch Goals

- Incoproate Visual Regression Testing using Chromatic
- Practice continuous upgrades by using Dependabot to check for version bumps daily, relying on testing (visual and cypress) to ensure there are no regressions.

## Design

Utilizes Chakra-UI Pro Components. Gray has rights to the Application and Marketing package. Reachout to @ariperez for any of the code.

- <https://pro.chakra-ui.com/components>

## Chromatic

Latest Builds: <https://www.chromatic.com/builds?appId=618c059790d3e7003af59018>

If you're a collaborator on this repo, you should have auto access to chromatic when you follow the above URL.

## CONTRIBUTIONS

Chromatic Workflow: <https://www.chromatic.com/docs/workflow>

1. Submit a PR
2. Approval
   1. Chromatic - @prouduct or @developers team approves visual changes
      1. Changeset must be approved → Assign reviewers or approve yourself.
      2. Outstanding discussions must be resolved → Click ‘Resolve’ on discussions.
      3. All assigned reviewers must approve → Click ‘Approve’ in the PR screen tab bar.
   2. Pull Request (PR) - After Chromatic approval, @developers approves the PR
3. Approving reviewer will merge the PR.
