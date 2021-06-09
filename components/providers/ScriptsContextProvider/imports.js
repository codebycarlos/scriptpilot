import { useEffect, useState, useCallback } from 'react'
import { ScriptsContext } from 'hooks/context/ScriptsContext'
// Import Link from 'next/link'
import { useScriptsContextActions } from 'hooks/extender/useScriptsContextActions'
import { useRequestHandler } from 'indigozest_modules/hooks/extender/useRequestHandler'
export const imports = {
  useState,
  useEffect,
  useCallback,
  ScriptsContext,
  useScriptsContextActions, 
  useRequestHandler,
}
