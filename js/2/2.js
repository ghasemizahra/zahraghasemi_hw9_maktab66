def run(instructions):
  lst = instructions.split()
  stack = []

  if not lst:
    return 0

  for i in lst:
    if i.isdigit():
      stack.append(int(i))
    elif i == "+":
      stack.append(stack.pop() + stack.pop())
    elif i == "-":
      stack.append(stack.pop() - stack.pop())
    elif i == "*":
      stack.append(stack.pop() * stack.pop())
    elif i == "/":
      stack.append(stack.pop() / stack.pop())
    elif i == "DUP":
      stack.append(stack[-1])
    elif i == "POP":
      stack.pop()
    else:
      return "Invalid instruction: " + i
  return stack.pop()


assert run('6 5 5 7 * - /') == 5
assert run('4 2 4 * 3 + 5 + / 5 -') == 1
assert run('5 8 + 4 5 1 + POP 13 +') == 17
assert run('x') == 'Invalid instruction: x'
assert run('') == 0