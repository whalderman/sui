#!/usr/bin/env bash
$(cd src/dated; deno publish --allow-dirty)
$(cd src/perf; deno publish --allow-dirty)
$(cd src/random; deno publish --allow-dirty)
$(cd src/regex; deno publish --allow-dirty)

# depends on random
$(cd src/throttle; deno publish --allow-dirty)
